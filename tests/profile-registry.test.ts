import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ProfileMinted } from "../generated/schema"
import { ProfileMinted as ProfileMintedEvent } from "../generated/ProfileRegistry/ProfileRegistry"
import { handleProfileMinted } from "../src/profile-registry"
import { createProfileMintedEvent } from "./profile-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let ipfsURI = "Example string value"
    let publicKey = "Example string value"
    let newProfileMintedEvent = createProfileMintedEvent(
      user,
      ipfsURI,
      publicKey
    )
    handleProfileMinted(newProfileMintedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ProfileMinted created and stored", () => {
    assert.entityCount("ProfileMinted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ProfileMinted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ProfileMinted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ipfsURI",
      "Example string value"
    )
    assert.fieldEquals(
      "ProfileMinted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "publicKey",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
