using System.Text.Json.Serialization;

namespace AACore.Data;
[JsonConverter(typeof(JsonStringEnumConverter))]
public enum TileType
{
    GrammarMarker,
    Regular,
    Link,
    Blank
}