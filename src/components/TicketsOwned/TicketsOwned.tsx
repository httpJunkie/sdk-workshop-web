import { useState, useEffect } from 'react'
import styles from './TicketsOwned.module.css'


import { useAppState } from '~/hooks/useAppContext'


type TicketFormatted = {
  tokenId: string,
  svgImage: string,
  ticketType: { trait_type: string, value: string }
}

const TicketsOwned = () => {
  const [ticketCollection, setTicketCollection] = useState<TicketFormatted[]>([])
  const { mints } = useAppState()

  console.log(window.ethereum)



  const listOfTickets = ticketCollection.map((ticket) => (
    <div className={styles.svgItem} key={`ticket${ticket.tokenId}`}>
      <img
        width={200}
        height={200}
        src={ticket.svgImage}
        alt={`Ticket# ${ticket.tokenId}`}
      />
      <div>
        <button className="dapp" id={ticket.tokenId} onClick={() => addNft(ticket.tokenId)}>AddNFT</button>
      </div>
    </div>
  ))

  // useEffect(() => {
  //   console.log('ticketsOwned: UseEffect')
  //   if (typeof window !== 'undefined' && account !== null && window.ethereum) {

  //     const provider = new ethers.providers.Web3Provider(
  //       window.ethereum as unknown as ethers.providers.ExternalProvider,
  //     )
  //     const signer = provider.getSigner()
  //     const factory = new ETHTickets__factory(signer)

  //     if (!isSupportedNetwork(chainId)) {
  //       return
  //     }

  //     const nftTickets = factory.attach(config[chainId].contractAddress)
  //     const ticketsRetrieved: TicketFormatted[] = []

  //     nftTickets.walletOfOwner(account)
  //       .then((ownedTickets) => {
  //         const promises = ownedTickets.map(async (token) => {
  //           const currentTokenId = token.toString()
  //           const currentTicket = await nftTickets.tokenURI(currentTokenId)

  //           const base64ToString = window.atob(
  //             currentTicket.replace('data:application/json;base64,', ''),
  //           )
  //           const nftData: NftData = JSON.parse(base64ToString)

  //           ticketsRetrieved.push({
  //             tokenId: currentTokenId,
  //             svgImage: nftData.image,
  //             ticketType: nftData.attributes.find(
  //               (ticket) => ticket.trait_type === 'Ticket Type',
  //             ),
  //           } as TicketFormatted)
  //         })
  //         Promise.all(promises).then(() => setTicketCollection(ticketsRetrieved))
  //       })
  //   }
  // }, [account, mints, chainId])

  return (
    <div className={styles.ticketsOwnedView}>
      <div className={styles.ticketGrid}>{listOfTickets}</div>
    </div>
  )
}

export default TicketsOwned