import { isInJest } from '../tests/isInJest';

type soundsTypes = 'FailSound';

export const playSound = (sound: soundsTypes): void => {
  if (!isInJest()) {
    const audio = new Audio(
      `${__IS_DEV__ ? '/' : `/${process.env.PUBLIC_URL}/`}sounds/${sound}.mp3`,
    );
    audio.play();
  }
};
