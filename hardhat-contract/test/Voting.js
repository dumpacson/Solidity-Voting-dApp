const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting Contract", function () {
  let Voting;
  let votingInstance;
  let owner;
  let voter;

  beforeEach(async function () {
    [owner, voter] = await ethers.getSigners();

    // Deploy the contract
    Voting = await ethers.getContractFactory("Voting");
    votingInstance = await Voting.deploy(["Safwan", "Yasha", "Khairi"], 90);
  });
  it("Should allow a user to vote for a valid candidate", async function () {
    await votingInstance.connect(voter).vote(0);
  
    const candidates = await votingInstance.getAllVotesOfCandidates();
    const votedCandidate = candidates[0];
    expect(candidates).to.deep.equal(["Safwan", "Yasha", "Khairi"]);
  
    const hasVoted = await votingInstance.voters(voter.address);
    expect(hasVoted).to.equal(true); // Assuming the contract sets hasVoted to true after voting
  });

  it("Should return all votes of candidates", async function () {
    // Log contract address for debugging
    console.log("Contract address:", votingInstance.target);

    // Call the getAllVotesOfCandidates function
    const candidates = await votingInstance.getAllVotesOfCandidates();

    await candidates.wait();

    expect(await votingInstance.getAllVotesOfCandidates()).to.deep.equal(["Safwan", "Yasha", "Khairi"], [0, 0, 0]);

    // Log retrieved candidates for debugging
    console.log("Retrieved candidates:");

    // Assuming you have two initial candidates
    expect(candidates.length).to.equal(2);

    // Check the properties of each candidate
    expect(candidates[0].name).to.equal("Candidate 1");
    expect(candidates[0].voteCount).to.equal(0);

    expect(candidates[1].name).to.equal("Candidate 2");
    expect(candidates[1].voteCount).to.equal(0);
  });
});

