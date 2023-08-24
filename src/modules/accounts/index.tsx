/* Generated with TypeScript React snippets */

import { Button, Container, Popup, Text } from '@src/components/ui';
import { useStore } from '@src/hooks/use-store';
import { gaEvent } from '@src/utils/ga4';
import { observer } from 'mobx-react-lite';
import React, { FC, useCallback, useMemo } from 'react';
import AccountItem from './item';

/** Accounts **
* ...
* @Author Star Noob
* @Created 2023-01-13
*/

interface Props { }

const Accounts: FC<Props> = observer((props: Props): JSX.Element => {
	const { accountStore, menuStore, modalStore, mapStore } = useStore();

	const callbacks = {
		onCloseClick: useCallback((): void => {
			modalStore.setModal('NONE');
		}, []),
		onAddNewAccount: useCallback((): void => {
			accountStore.add('Nick Name');
			gaEvent('Accounts', 'Added new account', '', accountStore.list.length);
		}, []),
		onRemoveAccount: useCallback((id: string): void => {
			mapStore.clearMapData(id);
			accountStore.remove(id);
			menuStore.setPlayerID(accountStore.currentAccount.playerID);
			gaEvent('Accounts', 'Remove account');
		}, []),
		onAccountSelect: useCallback((id: string, playerID: string): void => {
			if (accountStore.current == id)
				return;
			accountStore.setSelected(id);
			menuStore.setPlayerID(playerID);
			gaEvent('Accounts', 'Select account', playerID);
		}, []),
		onNameChange: useCallback((id: string, name: string): void => {
			accountStore.change(id, { name });
		}, []),
		onPlayerIDChange: useCallback((id: string, playerID: string): void => {
			accountStore.change(id, { playerID });
			if (id == accountStore.current)
				menuStore.setPlayerID(playerID);
		}, []),
	};

	const header: JSX.Element = useMemo((): JSX.Element => {
		return (
			<>
				<Text style={{ textAlign: 'center', marginTop: '10px' }}>
					If you have more accounts, you can add them here for quick switching. <br /><br />
				</Text >
				<Button style={{ width: '200px', alignSelf: 'center', marginBottom: '20px' }} onClick={callbacks.onAddNewAccount}>Add new account</Button>
			</>
		);
	}, []);

	return (
		<Popup label={'Accounts'} minWidth={800} maxWidth={800} maxHeight={400} onClose={callbacks.onCloseClick}>
			{header}
			<Container style={{ flexDirection: 'column', overflowY: 'auto' }}>
				{
					accountStore.list.map((account: { id: string, name: string, playerID: string }): JSX.Element => {
						return (
							<AccountItem key={account.id} id={account.id}
								name={account.name}
								playerID={account.playerID}
								selected={accountStore.current == account.id}
								onSelect={callbacks.onAccountSelect}
								onNameChange={callbacks.onNameChange}
								onPlayerIDChange={callbacks.onPlayerIDChange}
								onRemove={callbacks.onRemoveAccount}
							/>
						)
					})
				}
			</Container>
		</Popup>
	);
})

export default React.memo(Accounts);