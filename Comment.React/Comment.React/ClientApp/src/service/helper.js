class Helper {
    static CalculateDateTime(date) {
        let passTime = new Date(date);
        let currentDate = new Date();
        let subtractTime = (currentDate - passTime);
        return this.showTimeComment(subtractTime);
    }

    static showTimeComment(millisecond) {
        let rangeSecond = millisecond < 60000;
        let rangeMinute = millisecond >= 60000 && millisecond < 3600000;

        let hour = Math.floor((millisecond / (1000 * 60 * 60)));
        let rangeHour = hour >= 1 && hour < 24;
        let rangeDay = hour >= 24 && hour < 720;
        let rangeMonth = hour >= 720;

        switch (true) {
            case rangeSecond:
                return `${Math.floor((millisecond / 1000))}s ago`
            case rangeMinute:
                return `${Math.floor((millisecond / (1000 * 60)))}m ago`;
            case rangeHour:
                return `${hour}h ago`;
            case rangeDay:
                return `${Math.floor(hour * 24)}d ago`;
            case rangeMonth:
                return `${Math.floor(hour * 24 * 30)}m ago`;
        }
    }
}

export default Helper;