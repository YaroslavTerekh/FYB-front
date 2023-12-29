import { InfinitySpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { removeAlert } from '../../context/alert-context/alert-actions';

export function CustomSpinner(  ) {

    const dispatch = useDispatch();
    const spinner = useSelector(state => state.spinner);
    const [show, setShow] = useState(false);


    useEffect(() => {
        setShow(spinner.show)
    }, [spinner]);

    return (
        <div className={'spinner'} style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
            { show &&
                <div style={{  position: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.11)', backdropFilter:'blur(5px)', top:'0', width: '100vw', height: '100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                    <InfinitySpin
                        // width='200'
                        color="blue"
                    />

                    { !spinner.user && <p style={{fontSize:'20px'}}>Завантаження даних на сервер!</p>}
                </div>
            }
        </div>
    )
}
