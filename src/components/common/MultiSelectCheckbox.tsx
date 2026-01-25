import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { ICategory } from '@/types/products';
import { IOption, ISelectedCategory } from '@/types/common';
import Image from 'next/image';
import { MdArrowDropDown } from "react-icons/md";
import { IconContext } from "react-icons";


// import { Image } from 'antd';
// import { ReportService } from '../../services/reports-services';

interface ICheckedColor {
    background: string;
    borderColor: string
}

interface MultiCheckedSelectBoxProps {
    context?: string;
    placeholderText: string;
    boxClasses?: string;
    dropdownCardClasses?: string;
    checkedColor?: ICheckedColor;
    defaultSelects?: any[];
    options: Array<IOption>;
    selectedOptions: Array<ISelectedCategory>;
    setSelectedOptions: Dispatch<SetStateAction<Array<ISelectedCategory>>>;
}

/**
 * MultiCheckedSelectBox component
 * Now the component handles for sales report only
 *
 * @param {string} placeholderText - Input placeholder text
 * @param {string} [boxClasses] - CSS classes for the select box (optional)
 * @param {string} [dropdownCardClasses] - CSS classes for dropdown box which open after click on select box (optional)
 * @param {Array} defaultSelects - Default selected options
 * @param {Array} options - Available options list
 * @param {Array} selectedOptions - Currently selected options
 * @param {Function} setSelectedOptions - Setter for selected options
 *
 * @returns {JSX.Element}
 */

export default function MultiCheckedSelectBox({
    context,
    placeholderText,
    boxClasses = '',
    dropdownCardClasses = '',
    checkedColor = { background: "", borderColor: "" } as ICheckedColor,
    defaultSelects = [],
    options,
    selectedOptions,
    setSelectedOptions
}: MultiCheckedSelectBoxProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (defaultSelects?.length > 0 && selectedOptions.length === 0) {
            setSelectedOptions(defaultSelects);
        }
    }, [defaultSelects, selectedOptions, setSelectedOptions]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function handleCheckboxChange(value: any) {
        setSelectedOptions((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    }

    function getDisplayText() {
        if (selectedOptions.length === 0) {
            return <span>{placeholderText}</span>;
        }

        return (
            <span>
                {selectedOptions.map((option, idx) => (`${option} ${idx === selectedOptions.length - 1 ? '' : ', '}`))}
            </span>
        );
    }

    return (
        <div>
            <div style={styles.selectWrapper} ref={wrapperRef}>
                <div
                    className={boxClasses}
                    style={{
                        ...styles.selectTrigger,
                        ...(isOpen ? styles.selectTriggerActive : {})
                    }}
                    onClick={toggleDropdown}
                >
                    <span className="truncate">{getDisplayText()}</span>
                    <span
                        style={{
                            ...styles.arrow,
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                    >
                        <MdArrowDropDown className='text-2xl' />
                    </span>
                </div>

                {isOpen && (
                    <div className={`z-[999] ${dropdownCardClasses}`} style={styles.checkboxContainer}>
                        {options.map((option) => (
                            <label key={option.id} style={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes(option.value)}
                                    onChange={() => handleCheckboxChange(option.value)}
                                    style={styles.hiddenCheckbox}
                                />
                                <span
                                    style={{
                                        ...styles.checkboxCustom,
                                        ...(selectedOptions.includes(option.value) ? checkedColor : {})
                                    }}
                                >
                                    {selectedOptions.includes(option.value) && (
                                        <span style={styles.checkmark}></span>
                                    )}
                                </span>
                                <span style={styles.checkboxLabel}>{option.label}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    selectWrapper: {
        width: '100%',
        maxWidth: '360px',
        position: 'relative'
    },
    selectTrigger: {
        // background: 'white',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        padding: '0 16px',
        fontSize: '15px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        userSelect: 'none'
    },
    selectTriggerActive: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    arrow: {
        fontSize: '14px',
        color: '#666',
        transition: 'transform 0.3s'
    },
    checkboxContainer: {
        // background: 'white',
        // border: '2px solid #e0e0e0',
        // borderTop: '1px solid #e0e0e0',
        // borderBottomLeftRadius: '8px',
        // borderBottomRightRadius: '8px',
        padding: '16px',
        width: '100%',
        position: 'absolute',
        top: '100%',
        left: 0,
        zIndex: 10,
        maxHeight: '300px',
        overflowY: 'auto',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    checkboxItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0',
        cursor: 'pointer',
        position: 'relative'
    },
    hiddenCheckbox: {
        position: 'absolute',
        opacity: 0,
        pointerEvents: 'none'
    },
    checkboxCustom: {
        width: '24px',
        height: '24px',
        border: '2px solid #d0d0d0',
        borderRadius: '50%',
        marginRight: '12px',
        position: 'relative',
        transition: 'all 0.3s ease',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        userSelect: 'none'
    },
    // checkboxChecked: {
    //     background: '#00c853',
    //     borderColor: '#00c853'
    // },

    checkmark: {
        width: '5px',
        height: '10px',
        border: 'solid white',
        borderWidth: '0 2.5px 2.5px 0',
        transform: 'rotate(45deg) translateY(-1px)',
        display: 'inline-block'
    },
    checkboxLabel: {
        fontSize: '15px',
        color: '#333',
        userSelect: 'none'
    }
};