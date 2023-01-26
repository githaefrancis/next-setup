import React from "react";
import styles from './BaseTemplate.module.css';
export interface IBaseTemplate {
    sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = () => {
    return <div>Hello Card</div>;
};

export default BaseTemplate