namespace AACore.Data;

public class Board
{
    public string Name { set; get; }
    public bool TopLevel { set; get; }
    public int Rows { set; get; }
    public int Columns { set; get; }
    public List<string> Path { set; get; }
    public List<Tile> Tiles { set; get; }
}