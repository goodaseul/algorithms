function solution(id_list, report, k) {
    const reportCount = new Map(); // 신고 당한 사람 | 횟수
    const userReportList = new Map(); // 신고자 | [신고한 사람들]
    [...new Set(report)].forEach(re => {
        const [id, reportPerson] = re.split(" ");
        // 신고 당한 사람 횟수 누적
        reportCount.set(reportPerson, (reportCount.get(reportPerson) || 0 ) +1)
        // 누가 누구를 
        const list = userReportList.get(id) || [];
        list.push(reportPerson);
        userReportList.set(id, list);
    })
   return id_list.map(id => {
        const myReportList = userReportList.get(id) || [];
        return myReportList.filter(user => reportCount.get(user) >= k).length;
    });
}