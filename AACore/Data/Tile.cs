namespace AACore.Data;

public record Tile(
    TileType Type = TileType.Regular,
    string DisplayName = "",
    string? IconName = null,
    string? IconLink = null,
    TileColour? Colour = null,
    string? InternalName = null,
    string? Pronunciation = null,
    string? PluralForm = null,
    string? PluralFormPronunciation = null,
    string? PastForm = null,
    string? PastFormPronunciation = null,
    string? NegativeForm = null,
    string? NegativeFormPronunciation = null,
    string? LinkTo = null
);
