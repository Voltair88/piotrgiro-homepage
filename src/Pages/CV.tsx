import { CeVe } from 'Styled';
import { useTranslation, Trans } from 'react-i18next';

export default function CV() {
  const { t } = useTranslation();
  return (
    <CeVe>
      <h2>{t('CVHeader1')}</h2>
      <div className="container">
        <ul>
          <li>{t('Actor1')}</li>
          <li>{t('Actor2')}</li>
          <li>{t('Actor3')}</li>
          <li>{t('Actor4')}</li>
          <li>{t('Actor5')}</li>
          <li>{t('Actor6')}</li>
          <li>{t('Actor7')}</li>
          <li>{t('Actor8')}</li>
          <li>{t('Actor9')}</li>
          <li>{t('Actor10')}</li>
          <li>{t('Actor11')}</li>
          <li>{t('Actor12')}</li>
          <li>{t('Actor13')}</li>
          <li>{t('Actor14')}</li>
          <li>{t('Actor15')}</li>
          <li>{t('Actor16')}</li>
          <li>{t('Actor17')}</li>
        </ul>
      </div>
      <h2>{t('CVHeader2')}</h2>
      <div className="container">
        <ul>
          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor18')}</Trans>
          </li>
          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor19')}</Trans>
          </li>
          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor20')}</Trans>
          </li>

          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor21')}</Trans>
          </li>
          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor22')}</Trans>
          </li>
          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor23')}</Trans>
          </li>
          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor24')}</Trans>
          </li>
          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor25')}</Trans>
          </li>
          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor26')}</Trans>
          </li>
          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor27')}</Trans>
          </li>
          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor28')}</Trans>
          </li>
          <li>
            <Trans components={{ italic: <i></i> }}>{t('Actor29')}</Trans>
          </li>
        </ul>
      </div>
      <h2>{t('CVHeader3')}</h2>
      <div className="container">
        <ul>
          <li>{t('Dans1')}</li>
          <li>{t('Dans2')}</li>
          <li>{t('Dans3')}</li>
          <li>{t('Dans4')}</li>
          <li>{t('Dans5')}</li>
          <li>{t('Dans6')}</li>
          <li>{t('Dans7')}</li>
          <li>{t('Dans8')}</li>
          <li>{t('Dans9')}</li>
          <li>{t('Dans10')}</li>
          <li>{t('Dans11')}</li>
          <li>{t('Dans12')}</li>
          <li>{t('Dans13')}</li>
          <li>{t('Dans14')}</li>
          <li>{t('Dans15')}</li>
          <li>{t('Dans16')}</li>
          <li>{t('Dans17')}</li>
          <li>{t('Dans18')}</li>
          <li>{t('Dans19')}</li>
          <li>{t('Dans20')}</li>
        </ul>
      </div>
      <h2>{t('CVHeader5')}</h2>
      <div className="container">
        <ul>
          <li>{t('Commercial15')}</li>
          <li>{t('Commercial1')}</li>
          <li>{t('Commercial2')}</li>
          <li>{t('Commercial25')}</li>
          <li>{t('Commercial3')}</li>
          <li>{t('Commercial4')}</li>
          <li>{t('Commercial5')}</li>
          <li>{t('Commercial6')}</li>
          <li>{t('Commercial7')}</li>
          <li>{t('Commercial8')}</li>
        </ul>
      </div>
      <h2>{t('CVHeader4')}</h2>
      <div className="container">
        <ul>
          <li>{t('Skills1')}</li>
          <li>{t('Skills2')}</li>
          <li>{t('Skills3')}</li>
          <li>{t('Skills4')}</li>
          <li>{t('Skills5')}</li>
        </ul>
      </div>
    </CeVe>
  );
}
