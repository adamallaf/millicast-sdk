import { VideoCodec } from "../utils/Codecs"

export type ViewConnectOptions = {
  /**
   * - True to modify SDP for supporting dtx in opus. Otherwise False.
   */
  dtx?: boolean
  /**
   * - True to modify SDP for supporting absolute capture time header extension. Otherwise False.
   */
  absCaptureTime?: boolean
  /**
   * - Enable metadata extraction. This feature is only supported with the H.264 codec.
   */
  metadata?: boolean
  /**
   * - Disable the opportunity to receive video stream.
   */
  disableVideo?: boolean
  /**
   * - Disable the opportunity to receive audio stream.
   */
  disableAudio?: boolean
  /**
   * - Number of audio tracks to recieve VAD multiplexed audio for secondary sources.
   */
  multiplexedAudioTracks?: number
  /**
   * - Id of the main source that will be received by the default MediaStream.
   */
  pinnedSourceId?: string
  /**
   * - Do not receive media from the these source ids.
   */
  excludedSourceIds?: Array<string>
  /**
   * - Override which events will be delivered by the server (any of "active" | "inactive" | "vad" | "layers" | "viewercount" | "updated").*
   */
  events?: Array<Event>
  /**
   * - Options to configure the new RTCPeerConnection.
   */
  peerConfig?: PeerConnectionConfig
  /**
   * - Select the simulcast encoding layer and svc layers for the main video track, leave empty for automatic layer selection based on bandwidth estimation.
   */
  layer?: {
    /**
     * - rid value of the simulcast encoding of the track  (default: automatic selection)
     */
    encodingId: string
    /**
     * - The spatial layer id to send to the outgoing stream (default: max layer available)
     */
    spatialLayerId: number
    /**
     * - The temporaral layer id to send to the outgoing stream (default: max layer available)
     */
    temporalLayerId: number
    /**
     * - Max spatial layer id (default: unlimited)
     */
    maxSpatialLayerId: number
    /**
     * - Max temporal layer id (default: unlimited)
     */
    maxTemporalLayerId: number
  }
}

export type PublishConnectOptions = {
  /**
   * - Source unique id. Only avialable if stream is multisource.
   */
  sourceId?: string
  /**
   * - True to modify SDP for support stereo. Otherwise False.
   */
  stereo?: boolean
  /**
   * - True to modify SDP for supporting dtx in opus. Otherwise False.
   */
  dtx?: boolean
  /**
   * - True to modify SDP for supporting absolute capture time header extension. Otherwise False.
   */
  absCaptureTime?: boolean
  /**
   * - True to modify SDP for supporting aom dependency descriptor header extension. Otherwise False.
   */
  dependencyDescriptor?: boolean
  /**
   * - MediaStream to offer in a stream. This object must have
   * 1 audio track and 1 video track, or at least one of them. Alternative you can provide both tracks in an array.
   */
  mediaStream: MediaStream | Array<MediaStreamTrack>
  /**
   * - Broadcast bandwidth. 0 for unlimited.
   */
  bandwidth?: number
  /**
   * - Enable metadata insertion. This feature is only supported with the H.264 codec.
   */
  metadata?: boolean
  /**
   * - Disable the opportunity to send video stream.
   */
  disableVideo?: boolean
  /**
   * - Disable the opportunity to send audio stream.
   */
  disableAudio?: boolean
  /**
   * - Codec for publish stream.
   */
  codec?: VideoCodec
  /**
   * - Enable simulcast. **Only available in Chromium based browsers with either the H.264 or VP8 video codec.**
   */
  simulcast?: boolean
  /**
   * - Selected scalability mode. You can get the available capabilities using <a href="PeerConnection#.getCapabilities">PeerConnection.getCapabilities</a> method.
   * **Only available in Google Chrome.**
   */
  scalabilityMode?: string
  /**
   * - Options to configure the new RTCPeerConnection.
   */
  peerConfig?: PeerConnectionConfig
  /**
   * - Enable stream recording. If record is not provided, use default Token configuration. **Only available in Tokens with recording enabled.**
   */
  record?: boolean
  /**
   * - Specify which events will be delivered by the server (any of "active" | "inactive" | "viewercount").*
   */
  events?: Array<string>
  /**
   * - When multiple ingest streams are provided by the customer, add the ability to specify a priority between all ingest streams. Decimal integer between the range [-2^31, +2^31 - 1]. For more information, visit [our documentation](https://docs.dolby.io/streaming-apis/docs/backup-publishing).
   */
  priority?: number
}

export interface PeerConnectionConfig extends RTCConfiguration {
  /**
   * - whether stats collection should be auto initialized. Defaults to `true`
   */
  autoInitStats: boolean

  /**
   * The interval, in milliseconds, at which we poll stats. Defaults to 1s (1000ms)
   */
  statsIntervalMs: number
}

export type ReconnectData = {
  error: Error
}