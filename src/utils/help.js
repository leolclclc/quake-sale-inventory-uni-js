import Base64 from 'crypto-js/enc-base64';
import utf8 from 'crypto-js/enc-utf8';
import hmacSHA256 from 'crypto-js/hmac-sha256';
import sha256 from 'crypto-js/sha256';
import moment from 'moment';

export function get_open_body_sig_js(AppId, AppKey, body) {
  const Timestamp = moment().format('YYYYMMDDHHmmss');
  // const Nonce = uuidv4().replaceAll('-', '');
  const Nonce = '123456789';

  const Signature = Base64.stringify(
    hmacSHA256(
      (
        AppId +
        Timestamp +
        Nonce +
        sha256(JSON.stringify(body)).toString()
      ).toString(utf8),
      AppKey
    )
  );
  return `OPEN-BODY-SIG AppId="${AppId}",Timestamp="${Timestamp}",Nonce="${Nonce}",Signature="${Signature}"`;
}
