import { ProfileMinted as ProfileMintedEvent } from "../generated/ProfileRegistry/ProfileRegistry"
import { ProfileMinted } from "../generated/schema"

export function handleProfileMinted(event: ProfileMintedEvent): void {
  let entity = new ProfileMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.ipfsURI = event.params.ipfsURI
  entity.publicKey = event.params.publicKey

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
