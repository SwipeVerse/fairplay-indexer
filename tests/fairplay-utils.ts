import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { AddUser } from "../generated/fairplay/fairplay"

export function createAddUserEvent(
  player_addr: Address,
  name: string,
  dob: BigInt,
  gender: i32,
  location: BigInt,
  uri: string
): AddUser {
  let addUserEvent = changetype<AddUser>(newMockEvent())

  addUserEvent.parameters = new Array()

  addUserEvent.parameters.push(
    new ethereum.EventParam(
      "player_addr",
      ethereum.Value.fromAddress(player_addr)
    )
  )
  addUserEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addUserEvent.parameters.push(
    new ethereum.EventParam("dob", ethereum.Value.fromUnsignedBigInt(dob))
  )
  addUserEvent.parameters.push(
    new ethereum.EventParam(
      "gender",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(gender))
    )
  )
  addUserEvent.parameters.push(
    new ethereum.EventParam(
      "location",
      ethereum.Value.fromUnsignedBigInt(location)
    )
  )
  addUserEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )

  return addUserEvent
}
