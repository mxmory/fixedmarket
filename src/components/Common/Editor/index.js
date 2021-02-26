import React from 'react';
import { CheckIcon, CrossIcon } from '../../Icons';
import EdiText from 'react-editext';
import { useTranslation } from 'react-i18next';

export const Editor = ({
    localId,
    targetId,
    value,
    cancelHandler,
    saveHandler,
}) => {
    const { t } = useTranslation();
    return (
        <EdiText
            cancelOnUnfocus
            validation={(val) => val.length > 0}
            validationMessage={t('fieldCannotBeEmpty')}
            submitOnEnter
            cancelOnEscape
            inputProps={{
                className: 'edit-text__input',
            }}
            saveButtonClassName="edit-text__btn edit-text__btn--ok"
            cancelButtonClassName="edit-text__btn edit-text__btn--cancel"
            editContainerClassName="edit-text__edit"
            mainContainerClassName={`edit-text ${
                targetId === localId ? 'editing' : 'static'
            }`}
            saveButtonContent={<CheckIcon />}
            cancelButtonContent={<CrossIcon />}
            type="text"
            value={value}
            onCancel={cancelHandler}
            onSave={saveHandler}
            editing={localId === targetId}
        />
    );
};
