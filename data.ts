export type connectDataType={
    recoveryPhrase?:string;
    keystorePhrase?:string;
    keystorePassword?:string;
    private?:string
  }
  
type ImageData = {
    source: string;
    width?: number;
    height?: number;
  };
  
  type CoinDataType = {
    img: ImageData;
    name: string;
  };
  
 export const CoinData: CoinDataType[] = [
    {
      img: {
        source: '/logos/wallet-connect.png',
        width: 50,
        height: 50,
      },
      name: 'Wallet-connect',
    },
    {
      img: {
        source: '/logos/phantom-wallet.webp',
        width: 50,
        height: 50,
      },
      name: 'Phantom Wallet',
    },
    {
      img: {
        source: '/logos/Ledger-live.png',
        width: 50,
        height: 50,
      },
      name: 'Ledger Live',
    },
    // {
    //   img: {
    //     source: '"/logos/Bitget.png',
    //     width: 50,
    //     height: 50,
    //   },
    //   name: 'Bidget',
    // },
    {
      img: {
        source: '/logos/Mycellum.jpg',
        width: 50,
        height: 50,
      },
      name: 'Mycellium',
    },
    {
      img: {
        source: '/logos/Exodus-Wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Exodus Wallet',
    },
    {
      img: {
        source: '/logos/solar-Wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Solar Wallet',
    },
    {
      img: {
        source: '/logos/Monerujo-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Monejuro Wallet',
    },
    {
      img: {
        source: '/logos/Cake-Wallet.jpg',
        width: 50,
        height: 50,
      },
      name: 'Cake Wallet',
    },
    {
      img: {
        source: '/logos/Loopring.webp',
        width: 50,
        height: 50,
      },
      name: 'Loopring',
    },
    {
      img: {
        source: '/logos/Montero.png',
        width: 50,
        height: 50,
      },
      name: 'Montero GUI',
    },
    {
      img: {
        source: '/logos/OneKey.png',
        width: 50,
        height: 50,
      },
      name: 'One Key',
    },
    {
      img: {
        source: '/logos/zengo.png',
        width: 50,
        height: 50,
      },
      name: 'Zengo',
    },
    {
      img: {
        source: '/logos/safepal.png',
        width: 50,
        height: 50,
      },
      name: 'Safepal',
    },
    {
      img: {
        source: '/logos/guarda.png',
        width: 50,
        height: 50,
      },
      name: 'Guarda Wallet',
    },
    {
      img: {
        source: '/logos/bitcoin.com.png',
        width: 50,
        height: 50,
      },
      name: 'Bitcoin.com',
    },
    {
      img: {
        source: '/logos/TOn-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Ton Wallet',
    },
    {
      img: {
        source: '/logos/Ton-keeper.png',
        width: 50,
        height: 50,
      },
      name: 'TonKeeper',
    },
    {
      img: {
        source: '/logos/sui-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Sui Wallet',
    },
    {
      img: {
        source: '/logos/keepkey.png',
        width: 50,
        height: 50,
      },
      name: 'Keepkey',
    },
    {
      img: {
        source: '/logos/Elipal.png',
        width: 50,
        height: 50,
      },
      name: 'Elipal',
    },
    {
      img: {
        source: '/logos/Argent.png',
        width: 50,
        height: 50,
      },
      name: 'Argent',
    },
    {
      img: {
        source: '/logos/Youhodler.jpg',
        width: 50,
        height: 50,
      },
      name: 'Youhodler',
    },
    {
      img: {
        source: '/logos/BitBox.webp',
        width: 50,
        height: 50,
      },
      name: 'BitBox',
    },
    {
      img: {
        source: '/logos/ColdCard-wallet.jpg',
        width: 50,
        height: 50,
      },
      name: 'Coldcard wallet',
    },
    {
      img: {
        source: '/logos/Keystone.png',
        width: 50,
        height: 50,
      },
      name: 'Keystone',
    },
    {
      img: {
        source: '/logos/simplehold.jpg',
        width: 50,
        height: 50,
      },
      name: 'Simplehold',
    },
    {
      img: {
        source: '/logos/MyEther.png',
        width: 50,
        height: 50,
      },
      name: 'MyEther',
    },
    {
      img: {
        source: '/logos/infiniti.png',
        width: 50,
        height: 50,
      },
      name: 'Infiniti',
    },
    {
      img: {
        source: '/logos/coinspace.png',
        width: 50,
        height: 50,
      },
      name: 'Coinspace',
    },
    {
      img: {
        source: '/logos/cool-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Cool wallet',
    },
    {
      img: {
        source: '/logos/Ambire.png',
        width: 50,
        height: 50,
      },
      name: 'Ambire',
    },
    {
      img: {
        source: '/logos/BitPay.png',
        width: 50,
        height: 50,
      },
      name: 'BitPay',
    },
    {
      img: {
        source: '/logos/stakedwallet-io.webp',
        width: 50,
        height: 50,
      },
      name: 'Stakedwallet.io',
    },
    {
      img: {
        source: '/logos/Coinjar.png',
        width: 50,
        height: 50,
      },
      name: 'Coinjar',
    },
    {
      img: {
        source: '/logos/Arculus.png',
        width: 50,
        height: 50,
      },
      name: 'Arculus',
    },
    {
      img: {
        source: '/logos/BRD-wallet.jpg',
        width: 50,
        height: 50,
      },
      name: 'BRD wallet',
    },
    {
      img: {
        source: '/logos/kepir.png',
        width: 50,
        height: 50,
      },
      name: 'Kepir',
    },
    {
      img: {
        source: '/logos/Trust.jpg',
        width: 50,
        height: 50,
      },
      name: 'Trust',
    },
    {
      img: {
        source: '/logos/TerraStation.png',
        width: 50,
        height: 50,
      },
      name: 'Terra Station',
    },
    {
      img: {
        source: '/logos/BlueWallet.png',
        width: 50,
        height: 50,
      },
      name: 'Blue wallet',
    },
    {
      img: {
        source: '/logos/Solflare.png',
        width: 50,
        height: 50,
      },
      name: 'Solflare',
    },
    {
      img: {
        source: '/logos/Uniswap.webp',
        width: 50,
        height: 50,
      },
      name: 'Uniswap',
    },
    {
      img: {
        source: '/logos/Tangem-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Tangem Wallet',
    },
    {
      img: {
        source: '/logos/kaspium.webp',
        width: 50,
        height: 50,
      },
      name: 'Kaspium',
    },
    {
      img: {
        source: '/logos/kraken.png',
        width: 50,
        height: 50,
      },
      name: 'Kraken',
    },
    {
      img: {
        source: '/logos/zerion.png',
        width: 50,
        height: 50,
      },
      name: 'Zerion',
    },
    {
      img: {
        source: '/logos/atomic_wallet_logo_dark_rounded.png',
        width: 50,
        height: 50,
      },
      name: 'Atomic',
    },
    {
      img: {
        source: '/logos/coinomi.png',
        width: 50,
        height: 50,
      },
      name: 'Coinomi',
    },
    {
      img: {
        source: '/logos/Ronin.png',
        width: 50,
        height: 50,
      },
      name: 'Ronin',
    },
    {
      img: {
        source: '/logos/Tezos-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Tezos wallet',
    },
    {
      img: {
        source: '/logos/Electrum.png',
        width: 50,
        height: 50,
      },
      name: 'Electrum',
    },
    {
      img: {
        source: '/logos/MetaMask_Fox.svg.png',
        width: 50,
        height: 50,
      },
      name: 'Metamask',
    },
    {
      img: {
        source: '/logos/Binance.jpg',
        width: 50,
        height: 50,
      },
      name: 'Binance Chain',
    },
    {
      img: {
        source: '/logos/Yoroi-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Yoroi wallet',
    },
    {
      img: {
        source: '/logos/crypto.com.jpg',
        width: 50,
        height: 50,
      },
      name: 'Crypto.Com',
    },
    {
      img: {
        source: '/logos/Eternl-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Eternl Wallet',
    },
    {
      img: {
        source: '/logos/Flint-wallet.webp',
        width: 50,
        height: 50,
      },
      name: 'Flint wallet',
    },
    {
      img: {
        source: '/logos/Trezor-Logo.webp',
        width: 50,
        height: 50,
      },
      name: 'Trezor Wallet',
    },
    {
      img: {
        source: '/logos/Digitex.png',
        width: 50,
        height: 50,
      },
      name: 'Digitex',
    },
    {
      img: {
        source: '/logos/ledger.jpg',
        width: 50,
        height: 50,
      },
      name: 'Ledger',
    },
    {
      img: {
        source: '/logos/Leap-wallet.webp',
        width: 50,
        height: 50,
      },
      name: 'Leap Wallet',
    },
    {
      img: {
        source: '/logos/helium-hnt-logo.png',
        width: 50,
        height: 50,
      },
      name: 'Helium Wallet',
    },
    {
      img: {
        source: '/logos/Loopring.webp',
        width: 50,
        height: 50,
      },
      name: 'Loopring',
    },
    {
      img: {
        source: '/logos/tron-trx-logo.png',
        width: 50,
        height: 50,
      },
      name: 'Tron',
    },
    
  ];