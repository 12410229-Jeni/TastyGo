interface StudentProps {
  nama: string;
  nim: string;
  fakultas: string;
  prodi: string;
  semester: number;
}

function Student({
  nama,
  nim,
  fakultas,
  prodi,
  semester,
}: StudentProps) {
  return (
    <div className="student-card">
      <div className="card-number">
        {semester}
      </div>

      <div className="student-name">
        <h2>{nama}</h2>
        <span>Mahasiswa Aktif</span>
      </div>

      <div className="info">
        <div>
          <small>NIM</small>
          <p>{nim}</p>
        </div>

        <div>
          <small>FAKULTAS</small>
          <p>{fakultas}</p>
        </div>

        <div>
          <small>PROGRAM STUDI</small>
          <p>{prodi}</p>
        </div>
      </div>

      <div className="card-footer">
        <span>Semester</span>
        <strong>{semester}</strong>
      </div>
    </div>
  );
}

export default Student;