const lyrics = [
    {
        lyric: "미움도 분노도 괴로움도 그녀 숨결에 녹아서 사라질거야",
        title: "<여신님이 보고계셔> - 여신님이 보고계셔",
    },
    {
        lyric: "끝없는 모험, 유쾌한 일탈, 마치 탐험가 같았던 너와 나",
        title: "<랭보> - 나란히",
    },
    {
        lyric: "괜찮을까요? / 어쩌면요.",
        title: "<어쩌면 해피엔딩> - Ending",
    },
    {
        lyric: "나는 보았네 인간이 보았다고 믿었던 것을",
        title: "<랭보> - 취한 배",
    },
    {
        lyric: "새로운 아침, 새로운 하늘, 새로운 태양이 떠오르는 곳",
        title: "<랭보> - 다 망가진 침대 속에서",
    },
    {
        lyric: "Let me fly to the moon",
        title: "<렛미플라이> - let me fly",
    },
    {
        lyric: "펼쳐진 여백 속에 상상들을 그리면 멈춰진 어둠도 하나 둘 살아나",
        title: "<시데레우스> - 살아나",
    },
    {
        lyric: "때는 가장 빛나는 시간",
        title: "<팬레터> - 별이 반짝이는 시간",
    },
    {
        lyric: "그냥 막연한 믿음, 지금보다 좋아질거란 상상, 내 가는 길이 맞다는 확신, 언젠가 될거란 희망",
        title: "<쿠로이 저택엔 누가 살고 있을까?> - 막연한 믿음",
    },
    {
        lyric: "넌 하늘 저 편 밝은 별 들려오는 소리 midnight radio",
        title: "<헤드윅> - Midnight radio",
    },
]

const lyric = document.querySelector("#lyric span:first-child");
const title = document.querySelector("#lyric span:last-child");

const todaysLyric = lyrics[Math.floor(Math.random() * lyrics.length)];

lyric.innerText = todaysLyric.lyric;
title.innerText = todaysLyric.title;