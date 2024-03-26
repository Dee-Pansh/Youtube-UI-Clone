const useCalculateTime = (publishedAt) => {
        const givenDate = new Date(publishedAt);
        const presentDate = new Date();
        const timeDiff = presentDate.getTime() - givenDate.getTime();
        const secs = timeDiff / 1000;
        const mins = secs / 60;
        const hours = mins / 60;
        const days = hours / 24;
        const weeks=days/7;
        const Months = Math.floor(days / 30.44);
        const Years = Math.floor(Months / 12);
        if (Years >=1) return `${Math.round(Years)} years`;
        if (Months >=1) return `${Math.floor(Months)} months`;
        if(weeks >=1) return `${Math.round(weeks)} weeks`;
        if (days >=1) return `${Math.round(days)} days`
        if (hours >=1) return `${Math.floor(hours)} hours`;
        if (mins >= 1) return `${Math.round(mins)} mins`;
        return `${Math.round(timeDiff / 1000)} seconds`
      }

export default useCalculateTime