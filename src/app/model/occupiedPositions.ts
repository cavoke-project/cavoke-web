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
import {Player} from './player';


export interface OccupiedPositions {
  max_players?: number;
  occupied?: Array<Player>;
}

