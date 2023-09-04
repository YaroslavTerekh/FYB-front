import styles from '../FoodPage.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import CustomInput from '../../../../../components/Input/CustomInput';
import Button from '../../../../../components/Button/Button';
import closeIcon from '../../../../../img/components/regularClose.png';
import CustomTextArea from '../../../../../components/Input/CustomTextArea';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewFoodPointHelper, updateFoodPointHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';

const FoodPointModal = ({ isOpen, onClose, foodId, selectedId, editMode }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [weight, setWeight] = useState(null);

    useEffect(() => {
        if (editMode && selectedId && foodId) {
            const data = currentAdminState.food.find(x=> x.id === foodId).foodPoints.find(x=> x.id === selectedId);
            setName(data.title);
            setDescription(data.description);
            setWeight(data.portionMass);
        }
    }, [selectedId, editMode]);

    function changeNameHandler(e) {
        setName(e?.target?.value);
    }

    function changeDescriptionHandler(e) {
        setDescription(e?.target?.value);
    }

    function changeWeightHandler(e) {
        setWeight(e?.target?.value);
    }

    function onSaveHandler() {
        debugger;
        if(foodId && name && description && weight) {

            const data = { title: name, description: description,  portionMass: weight, FoodId: foodId};

            if(editMode && selectedId) {
                updateFoodPointHelper(dispatch, foodId, data);
            } else {
                addNewFoodPointHelper(dispatch, data);
            }

        } else {
            // TODO error
        }
    }

    return (
        <>
            <ModalWindow
                element={
                    <section className={styles.modalBox} >
                        <div className={`${styles.content}`} >
                            <h2 className={styles.contentTitle}>Харчування</h2>
                            <div className='inputsBox'>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Назва"}
                                        type={"text"}
                                        required={true}
                                        onChange={changeNameHandler}
                                        value={name}
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomTextArea
                                        customInputContainer={styles.customTextAreaContainer}
                                        className={styles.customTextArea}
                                        placeholder={"Опис"}
                                        required={true}
                                        onChange={changeDescriptionHandler}
                                        value={description}
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Вага порції"}
                                        type={"number"}
                                        required={true}
                                        onChange={changeWeightHandler}
                                        value={weight}
                                    />
                                </div>
                                <div className=''>
                                    <Button
                                        className={styles.btn}
                                        aria-expanded={true}
                                        aria-controls={`coach-modal`}
                                        onClick={onSaveHandler}
                                    >
                                        <p>OK</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                isOpen={isOpen}
                onClose={onClose}
                styles={{
                    bgColor:' #FFF',
                    width: '670px',
                    height: '570px',
                    border: '1px solid #A5A5A5',
                    overlayBgColor: 'none',
                }}
                closeIcon={closeIcon}
            />
        </>
    );
};

export default FoodPointModal;
