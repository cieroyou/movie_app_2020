import React from "react";


class Detail extends React.Component {
    componentDidMount() {
      const { location, history } = this.props;
      //직접 url을 입력한 경우에는 location.state 가 undefined이다
      if (location.state === undefined) {
        //'/' route로 리다이렉트 한다
        history.push("/");
      }
      console.log(location);
    }
    render(){
        return <span>Movie Detail</span>
    }
   
}
export default Detail;