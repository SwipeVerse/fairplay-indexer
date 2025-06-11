import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { ProfileMinted } from "../generated/ProfileRegistry/ProfileRegistry"

export function createProfileMintedEvent(
  user: Address,
  ipfsURI: string,
  publicKey: string
): ProfileMinted {
  let profileMintedEvent = changetype<ProfileMinted>(newMockEvent())

  profileMintedEvent.parameters = new Array()

  profileMintedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  profileMintedEvent.parameters.push(
    new ethereum.EventParam("ipfsURI", ethereum.Value.fromString(ipfsURI))
  )
  profileMintedEvent.parameters.push(
    new ethereum.EventParam("publicKey", ethereum.Value.fromString(publicKey))
  )

  return profileMintedEvent
}
