import Spline from '@splinetool/react-spline';
import  styled  from 'styled-components';

import Logo from './images/logo.svg';
import IconTwitter from './images/icon-twitter.svg';
import IconYouTube from './images/icon-youtube.svg';
import IconLaptop from './images/icon-laptop.svg';

export default function App() {
  return (
    <Wrapper>
      <Spline scene="https://prod.spline.design/3ukoivcZ4KujKz68/scene.splinecode" />
      <Content>
        <Menu>
          <li><img src={Logo} alt="Logo" /></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Download</a></li>
          <li><a href="/">App</a></li>
          <li><a href="/">Login</a></li>
          <li><button>Get Started</button></li>
        
        </Menu>
        <h1>Hello, I AM <br></br>SHUBHAM.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, omnis deserunt porro facere maiores nemo iste in ipsum molestias sapiente? Eligendi quis beatae neque quaerat.</p>
        <button>
          <img src="{IconLaptop}" alt="Download"/> Download for Mac
        </button>
      </Content>
      <Social>
        <div/>
        <img src="{IconTwitter}" alt="Twitter"/>
        <img src="{IconYouTube}" alt="YouTube"/>
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
font-family: 'Spline Sans', sans-serif;
font-size: 16px;
color: white;
position: relative;

.spline{
  position: relative;
  margin: 0;
  top: 0;
  right: 0;

  @media (max-width: 1024px) {
    transform: scale(0.8) translatex(200px);
  }
  
  @media (max-width: 800px) {
    transform: scale(0.7) translatex(600px);
  }
  
  @media (max-width: 600px) {
    transform: scale(0.5) translatex(-100px);
    right: auto;
    left: 50%;
    margin-left: -600px;
  }
  
  @media (max-width: 375px) {
    transform: scale(0.45) translatex(-50px);
  }
}
`
const Content = styled.div`
  position: absolute;
  top: 30px;
  
  display: flex;
  flex-direction: column;
  gap: 80px;

  h1{
    font-family: 'Spline Sans Mono', monospace;
    font-weight: bold;
    font-size: 40px;
    margin: 0;
    max-width: 500px;
  }
  p{
    font-weight:normal;
    line-height: 150%;
    max-width: 380px;
  }
  button{
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border:1px solid rgba(225, 225, 225 , 0.1);
    color: white;
    max-width: 280px;
    background-blur: (20px);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    :hover{
      border: 1px solid rgba(225, 225, 225, 0.8);
      transfrom: translateY(-3px);
    }
  }
  h1, p, button {
    margin: 0 30px 0 100px;
  }
`;

const Menu = styled.ul`
  display:flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  li{
    list-style: none;
    margin: 0;
  }

  a{
    text-decoration: none;
    color: white;
    padding: 8px 20px;
    border: 1px solid rgba(255, 255, 255, 0);
    transition: 1s;
    border-radius: 14px;

    :hover{
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

  }
`

const Social = styled.div`
position: absolute;
top: 150px;
left: 30px;
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;

div {
  width: 1px;
  height: 500px;
  background: linear-gradient(
    180deg,
    #08b6f9 0%,
    #6c56ef 33.57%,
    #1306dd 65.86%,
    #aa0eb2 100%
  );
}
`