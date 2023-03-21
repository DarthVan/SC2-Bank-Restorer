/* Generated with TypeScript React snippets */

import React, { FC, useCallback, useEffect, useState } from 'react';
import Button from 'src/components/ui/button';
import Container from 'src/components/ui/container';
import { gaEvent } from 'src/utils/ga4';
import { r } from "src/utils/utils";

/** AudioLoop **
* ...
* @Author Star Noob
* @Created 2023-03-10
*/

interface Props { }

const AudioLoop: FC<Props> = (props: Props): JSX.Element => {
	const [playing, setPlaying] = useState(true);
	const audio: HTMLAudioElement = new Audio();
	audio.autoplay = true;

	const playNext: () => void = (function (): () => void {
		const soundPath: string = 'assets/sound/';
		const playlist: string[] = [
			'Motherchip & Malmen - A Thousand Sunflowers.mp3',
			'ko0x - Galaxy Guppy.mp3',
			'DDRKirby(ISQ) - Starlight Festival.mp3',
			'Toni Leys - Through A Cardboard World.mp3',
			'laamaa - nuri brut.mp3',
			'Funky Fish - Shadow of my Angel.mp3',
			'Vince Kaichan - the Zubmarine Zone.mp3'
		];
		let index: number = r(0, playlist.length - 1);
		return (): void => {
			audio.src = soundPath + playlist[index];
			audio.play();
			index = index < playlist.length - 1 ? ++index : 0;
		};
	}());

	useEffect((): () => void => {
		audio.addEventListener('ended', playNext);
		playNext();
		return (): void => {
			audio.removeEventListener('ended', playNext);
		}
	}, []);

	const callbacks = {
		onPlay: useCallback((): void => {
			setPlaying(true);
			audio.play();
			gaEvent("Audio", "Sound ON");
		}, []),
		onPause: useCallback((): void => {
			setPlaying(false);
			audio.pause();
			gaEvent("Audio", "Sound OFF");
		}, [])
	};

	return (
		<Container style={{ width: '30px', height: '23px', padding: '0' }}>
			{
				playing ?
					<Button onClick={callbacks.onPause} style={{ width: '30px' }}>♫♪</Button>
					:
					<Button onClick={callbacks.onPlay} style={{ width: '30px' }}>x</Button>
			}
		</Container>
	);
}

export default React.memo(AudioLoop);