import React from 'react';
import { getLicPlan } from '../../../services/dataService';
import styles from './styles.scss';

export default function SubjectList() {
  const subjects = getLicPlan();
  return subjects.map(subject => <div className="subject-box">{subject.NOMBRE}</div>);
}
