export default function calculateReputation(reputation, precision) {
    if (reputation) {
        const score = parseFloat((reputation < 0 ? "-" : "") + ((((Math.log10(Math.abs(reputation))) - 9) * 9) + 25));

        return precision ? score.toFixed(precision) : Math.floor(score);
    }

    return 25;
}
