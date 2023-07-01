import {Button} from '@mui/material';
import Like from './Like';
import './index.css';

export default function App() {
  return (
    <div>
      <h3>Focus</h3>
      <h4>Realm</h4>
      <section>
        <div className="container">
          <h1>Contribute Now!!</h1>
        <div className='l1'>
          <hr
        style={{
          background: 'blue',
          color: 'blue',
          height: '2px',
          width:'1300px'
        }}
      /></div>
          <h2>Focus Realm: Empowering students to excel. Our website enhances focus and productivity, providing innovative tools
             and techniques. Join us to shape the educational landscape, overcome distractions, and cultivate effective study 
             habits. Together, we empower students to achieve their academic goals and become motivated, focused learners.</h2>
        </div>
        <div className='l2'>
        <hr
        style={{
          background: 'blue',
          color: 'blue',
          height: '2px',
          width:'1300px'
        }}
      /></div>
        <div className="paytm">
      <br />
      <a href="https://paytm.com/" target="_blank" rel="noreferrer">
        <img src='cardnew.png' style={{width: '200px',
      position: 'relative',
      top:'50px',
      left:'200px'}}></img>
      </a>
      </div>
      <div className="paypal">
      <br />
      <a href="https://www.paypal.com/in/home" target="_blank" rel="noreferrer">
        <img src='pay.png' style={{width: '200px',
      position: 'relative',
      bottom:'50px',
      right:'200px'}}></img>
      </a>
      </div>
      </section>
    </div>
  );
}
function DONATEBUTTON() {
  return (
    <div>
      <Button variant="contained" href="/about">
        DONATE
      </Button>
    </div>
  );
}