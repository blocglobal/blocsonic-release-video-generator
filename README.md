# blocGLOBAL Release Promo/YouTube Video Remotion Template

A template/preset that utilizes [Remotion](https://www.remotion.dev) to generate all required promotional and youtube videos for a release using configuration data.

## Available commands

The following commands are available:

**Start YouTube Preview**

By default this will only preview the first track in the release data. To change that, you’ll need to manually change the "index" value in the command to something other than 0.

```console
npm run start
```

**Start Social Preview**

Same as the YouTube Preview regarding the "index" value.

```console
npm run start:social
```

**Start This Day On Preview**

Same as the YouTube Preview regarding the "index" value.

```console
npm run start:thisday
```

**Render Youtube Video**

Same as the YouTube Preview regarding the "index" value.

```console
npm run build
```

```console
npm run build:youtube
```

**Render This Day On Video**

Same as the YouTube Preview regarding the "index" value.

```console
npm run build:thisday
```

**Render Social "Now" Video**

Same as the YouTube Preview regarding the "index" value.

```console
npm run build:social
```

```console
npm run build:social:now
```

**Render Social "Tomorrow" Video**

Same as the YouTube Preview regarding the "index" value.

```console
npm run build:social:tomorrow
```

**Render Social "Friday" Video**

Same as the YouTube Preview regarding the "index" value.

```console
npm run build:social:friday
```

**Render still image of Youtube video (default frame: 0)**

Same as the YouTube Preview regarding the "index" value.

```console
npm run still
```

**Render still image using custom frame**

Same as the YouTube Preview regarding the "index" value.

```console
FRAME=100 npm run still
```

**Upgrade Remotion to the latest version**

```console
npm run upgrade
```

## Commands for batch rendering

**Render all required videos and formats**

You should start this at least the night before you need it, as it will takes hours to complete.

```console
npm run all
```

**Render all Social/This Day On videos**

```console
npm run promos
```

**Render all This Day On videos**

```console
npm run thisday
```

**Render all Youtube videos**

You should start this at least the night before you need it, as it will takes hours to complete.

```console
npm run videos
```

**Render all Youtube video stills**

Will utilize the 1000th frame for this. The node script can be updated, if you’d like a different frame to be used.

```console
npm run stills
```

## Instructions

1. Replace the dummy audio file found in `public/01.wav` with your own. And add audio files for whatever tracks included the data file.
2. Supply your own data at `src/data/index.js`.
3. Supply your own cover image in `public`.
4. Preview or render using any of the above commands

## Required data:

Your data javascript file should return an object containing the following attributes:

- `release`: An object representing the release you’re generating videos for. It requires the following attributes:
  - `title`: The title of the release
  - `catNo`: The catalog number of the release
  - `date`: The release date
  - `year`: The year the album was released
  - `type`: Release type (eg. Original, maxBloc, fortyFive)
- `tracks`: An array containing objects representing individual tracks, each of which should contain the following attributes:
  - `sectionName`: The name of the section used in the preview UI to identify the section in the sidebar
  - `artist`: The name of the artist
  - `title`: The title of the track
  - `features`: An optional attribute if the track features another artist (eg. _(Featuring That Other Artist)_)
  - `length`: The length of the song (eg. _1:01_)
  - `filename`: The name of the audio file you placed in the _public_ directory (eg. _01.wav_)
  - `social`: An object representing the section of the audio file to use for the Promo and This Day On videos. It should have the following attributes:
    - `start`: The time that the audio should start at. (eg. _0:10_)
    - `end`: The time that the audio should end at. (eg. _1:09_)
