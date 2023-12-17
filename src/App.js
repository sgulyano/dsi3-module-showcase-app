import logo from './dsilogo.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Author(props) {
  return <li> {props.name} </li>;
}

function Work(props) {
  return (
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            <ul>
              {props.authors.map((author) => <Author name={author} />)}
            </ul>
          </p>
          <a href={props.vdo} class="btn btn-primary" target="_blank" without rel="noreferrer">VDO</a>
        </div>
      </div>
    </div>
  );
}

function ModuleAI(props) {
  const works = [
    { title: 'The Comparison of Thai Word Segmentation based on Lst20 dataset', author: ['กฤตพล ดำรงกมลทิพย์', 'คัฒชา เรือนเหล็ก'], vdo: 'https://drive.google.com/file/d/1SGJdtchI5v1JSBMoLbDsyqbKTzib_vCI/view?usp=drive_link' },
    { title: 'Detecting AI-Generated Text From ChatGPT and Human Reviews with Explainable AI in Thai language', author: ['ธนัชพร ใบสมุทร', 'อารีนา เจ๊ะโกะ', 'นูไรดา แมเราะ'], vdo: 'https://drive.google.com/file/d/1qMpRXX0dpwQA3K-HhzVmpnF35xa_qj7v/view?usp=drive_link' },
    { title: 'Generating Abstractive Summarization for Thai Tweets', author: ['สุทธาทิพย์ ไชยเทพ', 'ฐิตาภรณ์ ทวิสุวรรณ', 'ณัฐนิชา เกตุเนียม'], vdo: 'https://drive.google.com/file/d/1_7TTtbFA9Z5hLHcZsizToNzSIoS-D73n/view?usp=drive_link' },
    { title: 'Hate Speech Detection', author: ['วิศวะ จันทร์รุ่งโรจน์', 'สิทธิภาคย์ โยธี'], vdo: 'https://drive.google.com/file/d/1U1QLpNAW7GRVZO82JtPZiAgElsvMaZBy/view?usp=drive_link' },
    { title: 'Enhancing Disease Classification Efficiency in Durian Leaves through Augmentation Techniques', author: ['ณัฐนรี บัวผัด', 'อริสรา ติรไพบูลย์', 'คณาธิป ภัทรพรพงศ์'], vdo: 'https://drive.google.com/file/d/1920QcTwrRrTIPBiqwWw6Ian82-iY4WmW/view?usp=drive_link' },
    { title: 'Utilizing Machine Learning for Playing Games through Reinforcement Learning and Image Detection on Honkai: Star Rail', author: ['วาริศ ดงพระจันทร์', 'สรวิชญ์ โออิน'], vdo: 'https://drive.google.com/file/d/1bxpHVULVaukETdI-hEyhIuSGRvPNptkz/view?usp=drive_link' },
    { title: 'Voice to Images Using Whisper AI Model and Stable Diffusion Technique', author: ['ธิตติภัทร์ ไพรัชศุภวัฒน์', 'ปกรณ์กิตต์ กัลยาพิเชฏฐ์'], vdo: 'https://drive.google.com/file/d/15aI6xMZi-LXUqehSxNDcYiBwCHVCf_bD/view?usp=drive_link' },
    { title: 'Improving Image Quality in Lowlight Condition using Deep Learning', author: ['กนต์ธ มิ่งมา', 'ธัญวลัย โอบนิธิพันธ์'], vdo: 'https://drive.google.com/file/d/1MJNHvOJldNB1r3uIAY3TsQFp6783NW6m/view?usp=drive_link' },
    { title: 'Prompting Technique in Large Language Models for Text summarization', author: ['ปวันรัตน์ ขอรัตน์', 'อรอนงค์ อินยะวิน', 'กัลยา จันทรปุ่ม'], vdo: 'https://drive.google.com/file/d/1sJUL2HaRMC8UOLFWklfEDFCyiufJRGUi/view?usp=drive_link' },
    { title: 'Detecting Images from Movie Posters', author: ['สุทธิเชษฐ์ พงศ์หล่อพิศิษฏ์', 'บุญเกียรติ์ วงษ์ภัทรโรจน์', 'ปวนนท์ ปรีดียานนท์'], vdo: 'https://drive.google.com/file/d/1rULWXTm3FAmADZ4C0G44fD7o433REDcQ/view?usp=drive_link' },
    { title: 'Thai Food Identification from Image recognition', author: ['ปวีณ์กร กุศลสมบูรณ์', 'ชานน งามศรีขำ', 'รชต วัชโรภาส'], vdo: 'https://drive.google.com/file/d/1rCRdWk6oREsBH-rkQ8z449Gl24X73Cyj/view?usp=drive_link' },
  ];

  const divStyles = {
    padding: '50px 0px 20px 0px'
  }
  return (
    <>
      <div class="container" style={divStyles}>
        <h1 class="text-center">Module AI</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {works.map((work) => <Work title={work.title} authors={work.author} vdo={work.vdo} />)}
        </div>
      </div>
    </>
  );
}

function App() {

  return (
    <>
      <nav class="navbar navbar-light site-header sticky-top py-1 bg-white">
        <div class="container d-flex flex-column flex-md-row justify-content-between">
          <img src={logo} width="30" height="30" alt=""></img>
          <a class="py-2 d-none d-md-inline-block navlink" href="#">Actuarial Analytics</a>
          <a class="py-2 d-none d-md-inline-block navlink" href="#ai">Artificial Intelligence</a>
          <a class="py-2 d-none d-md-inline-block navlink" href="#">Digital Forensics</a>
          <a class="py-2 d-none d-md-inline-block navlink" href="#">Digital Transformation</a>
          <a class="py-2 d-none d-md-inline-block navlink" href="#">Health Informatics</a>
        </div>
      </nav>

      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold">DSI#3 Module Showcases</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">เว็บไซต์นี้จัดทำขึ้นเพื่อแสดงผลงานของนักศึกษาหลักสูตรวิทยาศาสตรบัณฑิต สาขาวิทยาศาสตร์และนวัตกรรมข้อมูล วิทยาลัยสหวิทยาการ มหาวิทยาลัยธรรมศาสตร์ รุ่น 3 ในวิชาโมดูล</p>
        </div>
      </div>

      <hr class="dashed"></hr>
      <div id="ai"></div>
      <ModuleAI />
      
      <hr class="dashed"></hr>

      <div class="container">
        <footer class="py-3 my-4">
          <p class="text-center text-muted">© 2023 Thammasat University</p>
        </footer>
      </div>
    </>
  );
}

export default App;
