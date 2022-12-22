import Image from 'next/image'
import {
    useActiveClaimConditionForWallet,
    useAddress,
    useClaimConditions,
    useClaimedNFTSupply,
    useClaimerProofs,
    useClaimIneligibilityReasons,
    useContract,
    useContractMetadata,
    useUnclaimedNFTSupply,
    useMetamask,
    useNetworkMismatch,
    useNetwork,
    ChainId,
  } from "@thirdweb-dev/react";
  import { BigNumber, utils } from "ethers";
  import type { NextPage } from "next";
  import { useMemo, useState } from "react";
  import styles from "../styles/Theme.module.css";
  import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
  import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

import images from '../public/assets';

const contractAddress = "0x25B24a338c5021d6918317394fA00Cb984b5615b"

function mint() {
    

    const [claiming, setClaiming] = useState(false);
    const connectMetamask = useMetamask();
    const { contract: contract } = useContract(contractAddress);
    const { data: claimedNFTSupply} = useClaimedNFTSupply(contract);
    const { data: unclaimedNFTSupply} = useUnclaimedNFTSupply(contract);
    const isWrongNetwork = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();

    const mint = async () => {

        if(!address) {
            connectMetamask()
            return;
        }

       if (isWrongNetwork) {
        switchNetwork && switchNetwork(ChainId.Mainnet);
        return;
       }

       setClaiming(true)

        try {
            await contract.erc721?.claim(1);
            alert('minted successfully');
            setClaiming(false);
        } catch(error) {
            alert(error)
        }
    }

  const address = useAddress();
  const [quantity, setQuantity] = useState(1);

  const { data: contractMetadata } = useContractMetadata(contract);

  const claimConditions = useClaimConditions(contract);

  const activeClaimCondition = useActiveClaimConditionForWallet(
    contract,
    address || ""
  );
  const claimerProofs = useClaimerProofs(contract, address || "");
  const claimIneligibilityReasons = useClaimIneligibilityReasons(contract, {
    quantity,
    walletAddress: address || "",
  });
  const unclaimedSupply = useUnclaimedNFTSupply(contract);
  const claimedSupply = useClaimedNFTSupply(contract);

  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString();
  }, [claimedSupply]);

  const numberTotal = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0)
      .add(BigNumber.from(unclaimedSupply.data || 0))
      .toString();
  }, [claimedSupply.data, unclaimedSupply.data]);

  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(
      activeClaimCondition.data?.currencyMetadata.value || 0
    );
    return `${utils.formatUnits(
      bnPrice.mul(quantity).toString(),
      activeClaimCondition.data?.currencyMetadata.decimals || 18
    )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ]);

  const maxClaimable = useMemo(() => {
    let bnMaxClaimable;
    try {
      bnMaxClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimableSupply || 0
      );
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000);
    }

    let perTransactionClaimable;
    try {
      perTransactionClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimablePerWallet || 0
      );
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000);
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable;
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable;

    if (snapshotClaimable) {
      if (snapshotClaimable === "0") {
        // allowed unlimited for the snapshot
        bnMaxClaimable = BigNumber.from(1_000_000);
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable);
        } catch (e) {
          // fall back to default case
        }
      }
    }

    const maxAvailable = BigNumber.from(unclaimedSupply.data || 0);

    let max;
    if (maxAvailable.lt(bnMaxClaimable)) {
      max = maxAvailable;
    } else {
      max = bnMaxClaimable;
    }

    if (max.gte(1_000_000)) {
      return 1_000_000;
    }
    return max.toNumber();
  }, [
    claimerProofs.data?.maxClaimable,
    unclaimedSupply.data,
    activeClaimCondition.data?.maxClaimableSupply,
    activeClaimCondition.data?.maxClaimablePerWallet,
  ]);

  const isSoldOut = useMemo(() => {
    try {
      return (
        (activeClaimCondition.isSuccess &&
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
            0
          )) ||
        numberClaimed === numberTotal
      );
    } catch (e) {
      return false;
    }
  }, [
    activeClaimCondition.data?.availableSupply,
    activeClaimCondition.isSuccess,
    numberClaimed,
    numberTotal,
  ]);

  console.log("claimIneligibilityReasons", claimIneligibilityReasons.data);

  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess &&
      claimIneligibilityReasons.isSuccess &&
      claimIneligibilityReasons.data?.length === 0 &&
      !isSoldOut
    );
  }, [
    activeClaimCondition.isSuccess,
    claimIneligibilityReasons.data?.length,
    claimIneligibilityReasons.isSuccess,
    isSoldOut,
  ]);

  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading ||
      unclaimedSupply.isLoading ||
      claimedSupply.isLoading ||
      !contract
    );
  }, [
    activeClaimCondition.isLoading,
    contract,
    claimedSupply.isLoading,
    unclaimedSupply.isLoading,
  ]);

  const buttonLoading = useMemo(
    () => isLoading || claimIneligibilityReasons.isLoading,
    [claimIneligibilityReasons.isLoading, isLoading]
  );
  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return "Sold Out";
    }
  }, [
    isSoldOut,
    canClaim,
    claimIneligibilityReasons.data,
    buttonLoading,
    activeClaimCondition.data?.currencyMetadata.value,
    priceToMint,
    quantity,
  ]);

  const [nav, setNav] = useState(true);
    const handleNav = () => {
      setNav(!nav)
    }
    
    return (
            <div className='bg-meta-gray'>
            <nav className="flex font-sfpro justify-between items-center nm:h-24 h-14  px-4  text-black">
            <div className='max-w-[100px] nm:max-w-[205px]'>
            <Image alt='logo' src={images.logo} width={205} height={95} />
            </div>
            <ul className="hidden font-bold nm:flex nm:mr-10 space-x-[5rem] uppercase text-[15px]">
              <li onClick={() => window.open('/FAQ', '_self')} className="p-4 cursor-pointer hover:text-gray-600">FAQ</li>
              <li onClick={() => window.open('https://www.spatial.io/s/AXK4N-Morning-Naked-Meta-63626a426ce24900014b9c86?share=2965428990700775752')} className="p-4 cursor-pointer  hover:text-gray-600">Explore</li>
            </ul>
            <div className='cursor-pointer z-20 block nm:hidden' onClick={handleNav}>
              {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-full border-r border-r-gray-700 z-10 h-full bg-beyond-1 ease-in-out duration-500' : 'fixed left-[-100%]' }>
              <div className='mt-10 px-6'>
              <Image alt='logo' src={images.logo} width={200} height={100} />
              </div>
              <ul className="pt-24 px-10 uppercase font-bold">
                <li onClick={() => window.open('/FAQ', '_self')} className="p-4 text-[30px]">FAQ</li>
                <li onClick={() => window.open('https://www.spatial.io/s/AXK4N-Morning-Naked-Meta-63626a426ce24900014b9c86?share=2965428990700775752')} className="p-4 text-[30px]">Explore</li>
                <button onClick={() => window.open('/mint')} className="uppercase text-[12px] nm:text-[30px] border-black border-2 rounded-[6px] ml-2 mt-4 px-4 py-1 hover:bg-black hover:text-white hover:border-white">Buy Space</button>
              </ul>
            </div>
            </nav>
            <div className='flex flex-row'>
            <div className="h-[90vh] w-[100%] nm:w-[50%] flex items-center justify-center flex-col">
                  <div className="font-bold text-center flex flex-col  justify-center text-[35px] nm:text-[70px] nm:ml-6 text-black">
                    <h1 className='text-center'>AXK4N</h1>
                  </div>
                  <div className="flex nm:ml-4 flex-row mt-4 space-x-4">
                    <div className="flex flex-row">
                      <div>
                        <Image alt='creator' src={images.creator} />
                      </div>
                      <div className="flex flex-col px-2">
                        <p className="text-[11px] text-gray-600 ">Creator</p>
                        <p className="text-[12px] text-black">Michel Rojkind</p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div>
                        <Image alt='rock' src={images.rock} width={45} height={45} />
                      </div>
                      <div className="flex flex-col px-2">
                        <div className="text-[11px] nm:text-[12px] text-gray-600 ">Supply</div>
                        <p className="text-[12px] text-black">1111</p>
                      </div>
                    </div>
                  </div>
                  <div className=" border-2 border-[#CBCBCB] mt-4 nm:mt-10 w-[80%] nm:w-[40%] nm:min-w-[300px] rounded-3xl flex flex-col items-center">
                    <p className="text-[10px] nm:text-[15px] mt-4 nm:mt-10 text-gray-600">Price</p>
                    <p className="text-[35px] nm:text-[50px] font-bold text-black">$100 USD</p>
                    <div className="flex flex-col mt-4 mb-6 nm:mb-10 text-black">
                      <p className="text-[10px] nm:text-[15px] text-center">Collectibles Sold</p>
                        <h1 className='text-center text-[30px] font-bold'>{claimedNFTSupply?.toNumber()} / 1111</h1>
                    </div>
                  </div>
                  <div className="mt-5 w-[60%] nm:w-[40%] nm:min-w-[300px] flex flex-col space-y-4">
                  <CrossmintPayButton
                clientId="ca1347b1-7ce2-49f7-8885-ad754ad8e9a5"
                mintConfig={{"type":"thirdweb-drop","totalPrice":"0.085","quantity":"1"}}
            />
                    {address && (<button className=" bg-[#212121] text-white text-bold text-[12px] py-3 font-bold rounded-lg"onClick={mint} disabled={claiming}>
                  {claiming ? "CLAIMING COLLECTIBLE" : "BUY COLLECTIBLE"}
                </button>)}
                {!address && (<button className=" bg-[#212121] text-white text-bold text-[14px] py-5 font-bold rounded-lg"  onClick={connectMetamask}>
                BUY WITH CRYPTO
                </button>)}
                  </div>
                </div>
                <div className='hidden nm:flex w-[50%]'>
                    <Image alt='mint' src={images.mint} />
                </div>
                </div>
                </div>
          )
        {/*}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-6 md:p-12">
        <header className="flex flex-col items-center justify-center p-6 md:p-12">
          <Image className="h-12 md:h-14" src={images.logo} width={50} height={50} />
          <p>Minting Page</p>
        </header>
        <main className="grid gap-6 rounded-md bg-black/20 p-6 md:grid-cols-2 md:p-12">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-2xl font-bold text-secondary">
              {contractMetadata?.name}
            </h1>
            <p className="text-center leading-relaxed">
              {contractMetadata?.description}
            </p>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="flex w-full max-w-sm flex-col space-y-4">
              <div className="aspect-square w-full overflow-hidden rounded-md">
                <img className="aspect-square object-cover" src={contractMetadata?.image} />
              </div>
  
              <div className="flex max-w-sm justify-between">
                <p>Collectibles Sold</p>
                <p>{claimedNFTSupply?.toNumber()} / 1000</p>
              </div>
  
              <div className="flex justify-center">
                {address && (<button className="rounded-full bg-black px-6 py-2 text-white hover:bg-opacity-75" onClick={mint} disabled={claiming}>
                  {claiming ? "Claiming Collectible" : "Buy Collectible"}
                </button>)}
                {!address && (<button className="rounded-full bg-black px-6 py-2 text-white hover:bg-opacity-75" onClick={connectMetamask}>
                Connect Wallet
                </button>)}
              </div>
            </div>
          </div>
        </main>
        <footer className="flex items-center justify-center space-x-2 p-6">
          <p className="text-sm">Powered by</p>
          <img className="h-4 md:h-4" src='../public/assets/logo.png'/>
        </footer>
      </div>
    */}
    ;
  }
  
  export default mint;