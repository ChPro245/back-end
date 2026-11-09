function ehAdmin(email) {
    const admin = (process.env.ADMIN_EMAIL || '').trim().toLowerCase();
    return Boolean(admin) && email === admin;
  }
  
  function somenteAdmin(req, res, next) {
    if (!ehAdmin(req.usuario?.email)) {
      return res.status(403).json({ erro: 'Apenas o administrador pode fazer isso' });
    }
    next();
  }
  
  module.exports = { somenteAdmin, ehAdmin };