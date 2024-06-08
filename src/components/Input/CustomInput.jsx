import React, { useEffect, useState } from 'react';
import styles from './CustomInput.module.css';
import { InputValidation } from '../helpers/input-validator';
import PropTypes from 'prop-types';

const customStyles = {
    control: () => ({}),
    option: () => ({}),
};

const CustomInput = ({
         onChange,
         className,
         placeholder,
         type,
         required,
         customInputContainer,
         icon,
         value,
         formRef,
         name,
         isValid
}) => {

    const { inputValidator } = InputValidation(formRef)
    const [inputIsValue, setInputIsValue] = useState(false);

    useEffect(() => {
       if (value) {
           setInputIsValue(true);
           if(isValid) {
               isValid(true);
           }
       } else {
           setInputIsValue(false);
           if(isValid) {
               isValid(false);
           }
       }

       if (type === "number" && (+value === 0 || +value <= 0)) {
           setInputIsValue(false);
           if(isValid) {
               isValid(false);
           }
       } else if (type === "tel-r" || type === "tel-l") {
           const phoneRegex = /^0[0-9]{9}$/.test(value)

           if (phoneRegex) {
               setInputIsValue(true);
               if(isValid) {
                   isValid(true);
               }
           } else {
               setInputIsValue(false);
               if(isValid) {
                   isValid(false);
               }
           }
       }

    }, [value, type]);

    const mainStyles = `${styles.customInputContainer} ${customInputContainer} `;
    const errorStyles = mainStyles + " " + styles.inputError;

    return (
       <>
           <div className={(inputValidator(name) && inputIsValue) ? mainStyles : errorStyles }>
               { type === "tel-r" &&
                   <div className={styles.startNum}>
                      +38
                   </div>
               }

               <input
                   required={required}
                   onChange={onChange}
                   className={className}
                   placeholder={placeholder}
                   type={type}
                   value={value}
                   name={name}
               />
               { icon &&
                   <span
                       className={styles.passwordIconBox}
                   >
                     <img src={icon}/>
                </span>
               }
           </div>
           { type === "tel-r" &&
               <div className={styles.errorMessage}>
                    номер повинен починатися з 0: 0900000000
               </div>
           }
       </>
    );
};

export default CustomInput;
