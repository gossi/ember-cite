import { Medium } from 'ember-cite/types/media';
import { WebFormat } from 'ember-cite/types/web';

const MEDIA: { [key: string]: string } = {
  [Medium.Media]: 'MediaObject',

  [Medium.Video]: 'VideoObject',
  [Medium.Movie]: 'Movie',
  [Medium.Painting]: 'Painting',
  [Medium.Recording]: 'MusicRecording',
  [Medium.Map]: 'Map',
  [Medium.Photograph]: 'Photograph',

  [Medium.Series]: 'CreativeWorkSeries',
  [Medium.TvSeries]: 'TVSeries',
  [Medium.MovieSeries]: 'MovieSeries',

  [Medium.Episode]: 'Episode',
  [Medium.TvEpisode]: 'TVEpisode',
  [Medium.Webisode]: 'Episode'
};

export function lookupMediaType(medium: string): string {
  if (MEDIA[medium]) {
    return MEDIA[medium];
  }

  return 'MediaObject';
}

const WEB: { [key: string]: string } = {
  [WebFormat.BlogPost]: 'BlogPosting',
  [WebFormat.BlogComment]: 'Comment',
  [WebFormat.Tweet]: 'SocialMediaPosting',
  [WebFormat.ForumComment]: 'DiscussionForumPosting',
  [WebFormat.MailingListComment]: 'Answer',
  [WebFormat.FacebookPage]: 'ProfilePage',
  [WebFormat.FacebookNote]: 'NoteDigitalDocument',
  [WebFormat.FacebookStatus]: 'SocialMediaPosting'
};

export function lookupWebType(format: string): string {
  if (WEB[format]) {
    return WEB[format];
  }

  return 'WebPage';
}

const SERIES: { [key: string]: Medium } = {
  [Medium.Episode]: Medium.Series,
  [Medium.TvEpisode]: Medium.TvSeries,
  [Medium.Webisode]: Medium.Series,
  [Medium.Movie]: Medium.MovieSeries
};

export function getSeries(episode: Medium): Medium {
  if (SERIES[episode]) {
    return SERIES[episode];
  }

  return Medium.Series;
}
