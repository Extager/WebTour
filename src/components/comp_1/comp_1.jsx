import './com_1.css';
import Japan from '../../images/Japan.jpg';

export default function Comp_1(){
    return(
        <div className="comp_1">
            <img src={Japan} alt="Connection Error" id='image' />
            <div className="text-btn">
                <div className='text'>
                    <span id='text_1'> МЕРЕДИАН ТУР</span>
                    <p id='text_2'>Автостопом по Японии</p>
                </div>
                <div className='btn'>
                    <button id='btn-go'>
                        <span>Поехали</span>
                    </button>
                </div>
            </div>
        </div>
    );
}