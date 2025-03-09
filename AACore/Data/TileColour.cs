using System.Text.Json.Serialization;

namespace AACore.Data;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum TileColour
{
    Red,
    Pink,
    Orange,
    Yellow,
    Green,
    Blue,
    Grey,
    White,
}