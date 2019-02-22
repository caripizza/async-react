import React from 'react';
import styles from './Footer.css';
import PropTypes from 'prop-types';

function Footer({ name }) {
  return (
    <footer className={styles.footer}>
      <a href="#top"> - top - </a>
      <p>{name}</p>
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string.isRequired
};
export default Footer;
