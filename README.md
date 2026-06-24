# TuneFinder

TuneFinder is a small music discovery app that recommends mock songs or artists based on the vibes a user selects. It is built with plain HTML, CSS, and JavaScript, so it is easy to open, read, and experiment with as a beginner project.

## Features

- Song recommendations
- Artist recommendations
- Music vibe chips
- Favourites
- Discover Me mode
- Listening Persona
- Loading states
- Error handling
- Confidence levels

## How It Works

Users select music vibe chips such as `Indie`, `Chill`, `Dance`, `Female Vocals`, or `90s`.

TuneFinder compares those selected vibes against a mock music dataset. Each song and artist has tags for things like genre, mood, decade, energy, vocals, and popularity.

Recommendations are scored based on how many selected chips match an item's tags. More matching tags means a stronger match.

Higher matching scores produce higher confidence recommendations:

- `High` confidence means several selected vibes matched.
- `Medium` confidence means a smaller but useful match.
- `Low` confidence means the app found only a loose match.

## Guardrails

- Uses mock music data only.
- Does not connect to Spotify or other streaming services.
- Does not invent links or music availability.
- Shows low confidence when matches are weak.

## Running Locally

TuneFinder does not currently need dependencies or an install step.

Open the project folder:

```bash
cd TuneFinder
```

Then open `index.html` in your browser.

If you want to run it with a simple local server, you can use Python:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Future Improvements

- Spotify integration
- Larger music database
- Better recommendation scoring
- User accounts

