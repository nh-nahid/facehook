const getDateDifferenceFromNow = (fromDate) => {
    const now = Date.now();
    const past = new Date(fromDate).getTime();

    let diffInSeconds = Math.floor((now - past) / 1000);

    if (diffInSeconds < 0) return "just now";

    const years = Math.floor(diffInSeconds / (3600 * 24 * 365));
    if (years > 0) return `${years} year${years > 1 ? "s" : ""}`;

    const hours = Math.floor(diffInSeconds / 3600);
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""}`;

    const minutes = Math.floor(diffInSeconds / 60);
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""}`;

    return `${diffInSeconds} second${diffInSeconds !== 1 ? "s" : ""}`;
};

export {getDateDifferenceFromNow}