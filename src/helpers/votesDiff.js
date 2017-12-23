export default function votesDiff(otherArray) {
    return function (current) {
        return otherArray.filter(function (other) {
            return other.author == current.author
                && other.voter == current.voter
                // && other.weight == current.weight
                && other.permlink == current.permlink
                && other.timestamp == current.timestamp;
        }).length == 0;
    };
}
