type soundsTypes = 'FailSound';

export const playAudio = (sound: soundsTypes): void => {
  if (process.env.NODE_ENV !== 'test') {
    const audio = new Audio(
      `${__IS_DEV__ ? '/' : `/${process.env.PUBLIC_URL}/`}sounds/${sound}.mp3`,
    );
    audio.play();
  }
};
