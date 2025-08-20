import  React, {useState, useEffect} from 'react';

function Sample(props) {
  //Api 호출을 통해서 받아올 데이터 저장
  const [data,setDate] = useState(null);

  //useEffect(effect,deps)
  //첫번째 인자를 랜더링후 실행할 함수, 두번째는 의존성배열, 이것이 없으면 랜더링 할때마다 실행한다
  //비어있는 []로 들어가면 생성될때 실행
  //[no] 생성될때 + no가 변경될때 실행

  //외부 API 호출방법
  //1. fetch : 자바 스크립트 내장함수 --그냥 사용가능
  //2. axios : 외부 라이브러리 사용 -- 설치 필요
  useEffect(() => {
    window
    .fetch(`https://my-json-server.typicode.com/typicode/demo/posts`)
    .then((res) => {
      //로그를 찍을때 +가 아닌 ,를 찍는것이 좋다
      console.log('Content-Type',res.headers.get('content-type'));
      return res.json();
    })
    .then((d) => {
      setDate(d);
    })
    .catch((error) => {
      console.log("error:",error);
    });
  }, [])

  return (
    <div>
      <h1>API DATA</h1>
      {data && data.map((d) => {
        return <p key={d.id}>{d.id}: {d.title}</p>
      })}
    </div>
  );
}

export default Sample;