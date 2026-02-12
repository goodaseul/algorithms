function solution(genres, plays) {
    const map = new Map();
    for( let i = 0; i < genres.length; i ++){
        const genre = genres[i];
        const play = plays[i];
        
        if( !map.has(genre) ){
            map.set(genre, [])
        }
        map.get(genre).push({plays: play, index: i})
    }
    
    for( const songs of map.values()){
        songs.sort((a,b) => b.plays - a.plays || a.index - b.index) 
    }
    
    const order = [...map.entries()].sort((a, b) => {
      const orderA = a[1].reduce((acc, cur) => acc + cur.plays, 0);
      const orderB = b[1].reduce((acc, cur) => acc + cur.plays, 0);
      return orderB - orderA;
    })
    
    let result = [];
    for( const [_,value] of order) {
        result.push(value[0].index)
        if( value[1] ) result.push(value[1].index);
    }
    return result 
}

// 1. 장르별로 노래들을 묶고 (plays, index 저장)
// 2. 각 장르 안에서 재생수 내림차순(같으면 index 오름차순)으로 정렬
// 3. 장르를 "총 재생수" 기준으로 내림차순 정렬
// 4. 각 장르에서 상위 2곡의 index만 결과에 추가
