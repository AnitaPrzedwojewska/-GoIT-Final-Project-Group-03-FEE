import css from './Footer.module.css';

const FooterCopyrights = () => {
  return (
    <div className={css.copyrightBox}>
      <div>© 2023 All Rights Reserved.</div>
      <div>Terms of Service</div>
    </div>
  );
}

export default FooterCopyrights;