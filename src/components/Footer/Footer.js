import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="social__media__icons">
                <button className="social__media__icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                </button>
                <button className="social__media__icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </button>
                <button className="social__media__icon">
                    <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button className="social__media__icon">
                    <FontAwesomeIcon icon={faYoutube} />
                </button>
            </div>
            <div className="footer__contents">
                <div className="footer__content">
                    <ul className="footer__content__list">
                        <li>Âm thanh và phụ đề</li>
                        <li>Trung tâm đa phương tiện</li>
                        <li>Quyền riêng tư</li>
                        <li>Liên hệ với chúng tôi</li>
                    </ul>
                </div>
                <div className="footer__content">
                    <ul className="footer__content__list">
                        <li>Mô tả âm thanh</li>
                        <li>Quan hệ với nhà đầu tư</li>
                        <li>Thông báo pháp lý</li>
                    </ul>
                </div>
                <div className="footer__content">
                    <ul className="footer__content__list">
                        <li>Trung tâm trợ giúp</li>
                        <li>Việc làm</li>
                        <li>Tùy chọn cookie</li>
                    </ul>
                </div>
                <div className="footer__content">
                    <ul className="footer__content__list">
                        <li>Thẻ quà tặng</li>
                        <li>Điều khoản sử dụng</li>
                        <li>Thông tin doanh nghiệp</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
