import { AddUser as AddUserEvent } from "../generated/fairplay/fairplay"
import { AddUser } from "../generated/schema"

export function handleAddUser(event: AddUserEvent): void {
  let entity = new AddUser(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.player_addr = event.params.player_addr
  entity.name = event.params.name
  entity.dob = event.params.dob
  entity.gender = event.params.gender
  entity.location = event.params.location
  entity.uri = event.params.uri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
