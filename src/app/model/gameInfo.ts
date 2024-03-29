/**
 * Cavoke
 * API for cavoke interaction between main server and clients
 *
 * The version of the OpenAPI document: 0.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Metadata about specific cavoke game (e.g. tictactoe, codenames)
 */
export interface GameInfo {
  /**
   * cavoke game unique id
   */
  id: string;
  /**
   * Game name displayed to users
   */
  display_name: string;
  /**
   * Game description displayed to users
   */
  description: string;
  /**
   * Maximum (?) number of players in a session
   */
  players_num: number;
  /**
   * Display names for all available roles (size must be equal to players_num)
   */
  role_names: Array<string>;
}

