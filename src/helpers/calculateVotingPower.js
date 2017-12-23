export default function calculateVotingPower(votingPower, lastVoteTime, precision) {
    const secondsPassedSinceLastVote = (new Date() - new Date(lastVoteTime + "Z")) / 1000;
    votingPower += (10000 * secondsPassedSinceLastVote / 432000);

    return Math.min(votingPower / 100, 100).toFixed(precision);
}
